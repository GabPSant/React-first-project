import Image from "next/image"

function Profile(){
    return (
      <div>
        <h3>Foto Antiga</h3>
        <p>Descrição da foto</p>
        <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </div>
    );
  }
  
export default function Gallery(){
    return (
      <main>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </main>
    );
}