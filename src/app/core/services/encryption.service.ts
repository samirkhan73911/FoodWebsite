import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { encryption } from '../constant/encryption';


@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

   // Use environment variable in real apps

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, encryption.secretKey).toString();
  }

  decrypt(textToDecrypt: string): string {
    return CryptoJS.AES.decrypt(textToDecrypt, encryption.secretKey).toString(CryptoJS.enc.Utf8);
  }
}
