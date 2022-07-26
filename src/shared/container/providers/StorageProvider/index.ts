import { container } from "tsyringe";

import { LocalStorageProvider } from "./implementations/LocalStorageProvider";
import { IStorageProvider } from "./interfaces/IStorageProvider";

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  LocalStorageProvider,
);
