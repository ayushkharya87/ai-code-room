let WebContainer;

if (typeof window !== "undefined") {
  import("@webcontainer/api").then((module) => {
    WebContainer = module.WebContainer;
  });
}

let webContainerInstance = null;

export const getWebContainer = async () => {
  if (webContainerInstance === null && WebContainer) {
    webContainerInstance = await WebContainer.boot();
  }
  return webContainerInstance;
};
