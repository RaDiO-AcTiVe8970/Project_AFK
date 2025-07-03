
export default function _Footer() {
    
  return (
    <>
    {/* Header */}
    {/* Working */}
    {/* <script src="https://cdn.tailwindcss.com"></script>  */}
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Project AFK. All rights reserved.</p>
        <p>Follow us on 
          <a href="https://twitter.com/project_afk" className="text-blue-400 hover:underline"> Twitter</a>
          and 
          <a href="https://discord.gg/project_afk" className="text-blue-400 hover:underline"> Discord</a>.
        </p>
      </div>
    </footer>

    </>
  )

}
