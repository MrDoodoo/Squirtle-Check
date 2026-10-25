// Fonction pour simuler l'éclosion d'un œuf avec génération des IV et du Shiny
function hatchEgg(pokemonPool) {
    // 1. Sélection aléatoire d'un Pokémon dans le pool
    const template = pokemonPool[Math.floor(Math.random() * pokemonPool.length)];
    
    // 2. Calcul du taux de Shiny (ex: 1/512 ou 0.2%)
    const isShiny = Math.random() < 0.004;

    // 3. Génération des IV aléatoires (entre 0 et 31) pour chaque statistique
    const ivs = {
        hp: Math.floor(Math.random() * 32),
        atk: Math.floor(Math.random() * 32),
        def: Math.floor(Math.random() * 32),
        spa: Math.floor(Math.random() * 32),
        spd: Math.floor(Math.random() * 32),
        spe: Math.floor(Math.random() * 32)
    };

    // 4. Objet Pokémon unique généré
    const hatchedPokemon = {
        id: template.id,
        name: template.name,
        type1: template.type1,
        type2: template.type2,
        isShiny: isShiny,
        level: 1,
        ivs: ivs,
        evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
        sprite: isShiny ? template.shinySprite : template.sprite,
        uid: 'pkmn_' + Date.now() + '_' + Math.floor(Math.random() * 1000)
    };

    console.log(`Œuf éclot ! C'est un ${hatchedPokemon.name} ${isShiny ? '✨ SHINY ✨' : ''}`);
    return hatchedPokemon;
}
