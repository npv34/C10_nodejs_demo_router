const showHomePage = (req, res) => {
    let html = `
        <form action="/search" method="get">
                <input name="name" type="text">
               <button>Search</button>
        </form>
      
    `;
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(html)
}

module.exports = {
    showHomePage
}
