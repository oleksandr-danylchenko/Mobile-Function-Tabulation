import {
  Filesystem,
  Directory,
  Encoding,
  WriteFileResult,
  ReadFileResult,
  ReaddirResult,
} from '@capacitor/filesystem';
import { StatOptions } from '@capacitor/filesystem/dist/esm/definitions';

const FILES_PATH_BASE = 'tabulation_app_files/';

export const checkFileExists = async (
  options: StatOptions,
): Promise<boolean> => {
  try {
    await Filesystem.stat(options);
    return true;
  } catch (_) {
    return false;
  }
};

export const fileExists = async (path: string): Promise<boolean> =>
  checkFileExists({
    path: FILES_PATH_BASE + path,
    directory: Directory.Data,
  });

export const saveTextFile = (
  path: string,
  content: string,
): Promise<WriteFileResult> =>
  Filesystem.writeFile({
    path: FILES_PATH_BASE + path,
    data: content,
    directory: Directory.Data,
    recursive: true,
    encoding: Encoding.UTF8,
  });

export const deleteTextFile = (path: string): Promise<void> =>
  Filesystem.deleteFile({
    path: FILES_PATH_BASE + path,
    directory: Directory.Data,
  });

export const readTextFile = (path: string): Promise<string | ReadFileResult> =>
  Filesystem.readFile({
    path: FILES_PATH_BASE + path,
    directory: Directory.Data,
    encoding: Encoding.UTF8,
  }).then((retrievedFile) => retrievedFile.data);

export const allTextFiles = (): Promise<ReaddirResult> =>
  Filesystem.readdir({
    path: FILES_PATH_BASE,
    directory: Directory.Data,
  });

export const deleteAllTextFiles = (): Promise<void> =>
  Filesystem.rmdir({
    path: FILES_PATH_BASE,
    directory: Directory.Data,
    recursive: true,
  });
