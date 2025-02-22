

function Gambar({gambar}) {
  return (
    <div className="laptopL:w-[319px] 4k:w-[540px]  h-auto">
      <img className="object-cover w-full h-full" src={gambar} alt="gambar" />
    </div>
  )
}

export default Gambar