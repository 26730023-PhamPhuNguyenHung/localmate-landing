// LocalMate - Client-Side Image Optimization Pipeline
// Tự động nén WebP, tính hash SHA-256 chống trùng và trích xuất Width/Height trước khi upload

export interface ImageOptimizationResult {
  file: File;
  width: number;
  height: number;
  originalSize: number;
  optimizedSize: number;
  format: string;
  hash: string;
  savingsPercent: number;
}

/**
 * Tính mã băm SHA-256 từ ArrayBuffer của tệp để chống upload trùng
 */
export async function calculateImageHash(buffer: ArrayBuffer): Promise<string> {
  if (crypto && crypto.subtle) {
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  // Fallback đơn giản nếu Web Crypto API không khả dụng
  return `hash_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Chuẩn hóa kích thước tệp hiển thị thân thiện (KB, MB)
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Tối ưu hóa hình ảnh client-side:
 * - Giữ nguyên SVG/GIF
 * - Không upscale ảnh nhỏ
 * - Resize ảnh quá lớn về max dimension (mặc định 1920px)
 * - Chuyển đổi sang WebP chất lượng cao (0.85) để tiết kiệm 60-80% dung lượng
 */
export async function optimizeImageClient(
  file: File,
  options: { maxDimension?: number; quality?: number } = {}
): Promise<ImageOptimizationResult> {
  const { maxDimension = 1920, quality = 0.85 } = options;
  const originalSize = file.size;
  const originalBuffer = await file.arrayBuffer();
  const hash = await calculateImageHash(originalBuffer);

  // Đối với SVG hoặc GIF động, giữ nguyên file gốc
  if (file.type === 'image/svg+xml' || file.type === 'image/gif') {
    return {
      file,
      width: 0,
      height: 0,
      originalSize,
      optimizedSize: originalSize,
      format: file.type.split('/')[1] || 'svg',
      hash,
      savingsPercent: 0
    };
  }

  return new Promise((resolve) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      let { width, height } = img;

      // Tính toán kích thước mới (không upscale)
      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        // Fallback file gốc nếu browser không hỗ trợ 2D context
        resolve({
          file,
          width: img.width,
          height: img.height,
          originalSize,
          optimizedSize: originalSize,
          format: file.type.split('/')[1] || 'jpg',
          hash,
          savingsPercent: 0
        });
        return;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, width, height);

      // Chuyển đổi sang WebP
      canvas.toBlob(
        (blob) => {
          if (!blob || blob.size >= originalSize) {
            // Nếu nén mà dung lượng không giảm, giữ file gốc
            resolve({
              file,
              width: img.width,
              height: img.height,
              originalSize,
              optimizedSize: originalSize,
              format: file.type.split('/')[1] || 'jpg',
              hash,
              savingsPercent: 0
            });
            return;
          }

          const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
          const optimizedFile = new File([blob], `${baseName}.webp`, { type: 'image/webp' });
          const savingsPercent = Math.max(0, Math.round(((originalSize - blob.size) / originalSize) * 100));

          resolve({
            file: optimizedFile,
            width,
            height,
            originalSize,
            optimizedSize: blob.size,
            format: 'webp',
            hash,
            savingsPercent
          });
        },
        'image/webp',
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve({
        file,
        width: 0,
        height: 0,
        originalSize,
        optimizedSize: originalSize,
        format: file.type.split('/')[1] || 'jpg',
        hash,
        savingsPercent: 0
      });
    };

    img.src = objectUrl;
  });
}
