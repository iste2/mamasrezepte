import { Injectable } from '@angular/core';
import {imagesBucketId, storage} from '../appwrite';
import {ID} from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  async uploadImage(image: File): Promise<string> {
    return (await storage.createFile(
      imagesBucketId,
      ID.unique(),
      image)).$id;
  }

  async deleteImage(imageId: string): Promise<void> {
    await storage.deleteFile(imagesBucketId, imageId);
  }

  getImagePreviewPath(imageId: string): string {
    const result = storage.getFilePreview(imagesBucketId, imageId, 100, 100);
    console.log(result);
    return result;
  }

  getImagePath(imageId: string): string {
    const result = storage.getFileView(imagesBucketId, imageId);
    console.log(result);
    return result;
  }

}
