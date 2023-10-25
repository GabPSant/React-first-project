function Profile(){
    return (
      <div>
        <h3>Foto Antiga</h3>
        <p>Descrição da foto</p>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </div>
    );
  }
  
export default function Gallery(){
    return (
      <main>
        <h1>Olá Mundo</h1>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </main>
    );
}