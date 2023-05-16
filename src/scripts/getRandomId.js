
export const getRandomIds = (num) => {
    let featuredHeroIds = [];
    const min = Math.ceil(1);
    const max = Math.floor(731);
    
    while(num--) {
        let id = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        featuredHeroIds.push(id);
    }
    return featuredHeroIds;
}