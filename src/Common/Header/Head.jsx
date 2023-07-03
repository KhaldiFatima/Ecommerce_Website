function Head() {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa-solid fa-phone' id='phone'></i>
            <label htmlFor='phone'>+213 76 94 43 88 88</label>
            <i className='fa-solid fa-envelope' id='envelope'></i>
            <label htmlFor='envelope'>Fatimati1030@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label htmlFor=''>Theme FAQ`s</label>
            <label htmlFor=''>Need Helps</label>
            <span>🏳</span>
            <label>EN</label>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
