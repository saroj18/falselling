import cloudinary from "@/utils/cloudinary";

interface FileUploader {
  upload: (file: FileList) => Promise<string[]>;
}

class ImageUploader implements FileUploader {
  async upload(files: FileList) {
    if (files.length < 1) {
      throw new Error("please provide files");
    }
    const uploadPromise = Array.from(files).map(async (image) => {
      const fileBuffer = Buffer.from(await image.arrayBuffer());
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "products" }, (error, result) => {
            if (error) reject(error);
            else resolve(result?.secure_url);
          })
          .end(fileBuffer);
      });
    });
    const imageURL = (await Promise.all(uploadPromise)) as string[];
    return imageURL;
  }

  async delete(publicId: string) {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      return result;
    } catch (error) {
      throw new Error("Failed to delete image");
    }
  }
}

export const uploader = new ImageUploader();
