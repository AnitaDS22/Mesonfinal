
// Llamar archivo Json con async

const consultarMenus = async () => {
    const response = await fetch ("./menus.json");
    const menus = await response.json ();
    return menus;
};

