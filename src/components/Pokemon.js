import React from 'react';

export function Pokemon({pokemon}){
    return (
        <div className="pokemon" >
            <div className="pokemon__name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon__meta">
                <span>maxHP: {pokemon.maxHP}</span>
                <span>maxCP: {pokemon.maxCP}</span>
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon__attacks">
                {pokemon && 
                pokemon.attacks && 
                pokemon.attacks.special
                .slice(0,3)
                .map(attack => (
                <span key={`${attack.name}-${attack.damage}`}>
                    {attack.name}
                </span>
                ))
                }
            </div>
        </div>
    )
}