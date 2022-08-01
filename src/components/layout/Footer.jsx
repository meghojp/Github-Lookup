function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-5 bg-slate-700 text-primary-content footer-center'>
      <div>
        <p className='text-lg text-white'>
          Copyright &copy; {footerYear} Github Lookup
        </p>
      </div>
    </footer>
  )
}

export default Footer
