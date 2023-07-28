
export const Character = (character) => {
  console.log('componente Character')
  console.log(character)
  return (
    <div className="col-3">
      <div className="card">
      <img 
        src={character.image}
        alt={character.name}
        className='card-img-top' />
      <p className="card-body">
        <h3 className="card-title">{character.name}</h3>
        {`Origin: ${character.origin && character.origin.name}`}</p>
    </div>
    </div>
  )
}
