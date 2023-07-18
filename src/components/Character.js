
export const Character = (character) => {
  console.log('componente Character')
  console.log(character)
  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} width='300' />
      <p>{`Origin: ${character.origin && character.origin.name}`}</p>
    </div>
  )
}
