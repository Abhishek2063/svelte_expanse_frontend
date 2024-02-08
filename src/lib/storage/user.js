export const isBrowser = () => {
    return typeof window !== "undefined";
  };
  
  export const setUserDetails = (data) => {
    if (isBrowser()) {
      sessionStorage.setItem("typeData", btoa(JSON.stringify(data)));
    }
  };
  
  export const clearUserDetails = () => {
    if (isBrowser()) {
      sessionStorage.removeItem("typeData");
    }
  };
  
  export const getUserDetails = () => {
    if (isBrowser()) {
      const typeData = sessionStorage.getItem("typeData");
      if (!typeData) {
        return null;
      }
  
      try {
        const userData = JSON.parse(atob(typeData));
        return userData;
      } catch (e) {
        console.error("Error parsing user data:", e);
        return null;
      }
    }
    return null;
  };
  
  export const setEntityData = (data) => {
    if (isBrowser()) {
      sessionStorage.setItem("entityData", btoa(JSON.stringify(data)));
    }
  };
  
  export const getEntityData = () => {
    if (isBrowser()) {
      const entityData = sessionStorage.getItem("entityData");
      if (!entityData) {
        return null;
      }
  
      try {
        const data = JSON.parse(atob(entityData));
        return data;
      } catch (e) {
        console.error("Error parsing entity data:", e);
        return null;
      }
    }
    return null;
  };
  