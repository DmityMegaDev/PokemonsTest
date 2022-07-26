export const adoptPokemonList = (list) => {
   return list.map((item) => {
        return {
            ...item,
            value: item.name,
            label: item.name,
        }
    });
};

export const adoptTypeList = (list) => {
   return list.map((item) => {
        return {
            value: item,
            label: item,
        }
    });
};