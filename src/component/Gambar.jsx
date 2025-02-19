

function Gambar({gambar}) {
  return (
    <div className="w-[319px] h-auto">
      <img className="object-cover w-full h-full" src={gambar} alt="gambar" />
    </div>
  )
}

export default Gambar