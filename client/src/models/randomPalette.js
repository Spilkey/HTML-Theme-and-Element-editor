class RandomPalette {
    constructor(){
        this.requestParams = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
    }

    async generateRandomColor(){
        const response = await fetch(`http://localhost:5000/random-palette`, this.requestParams);
        let colors = await response.json();
        let returnColors = colors["colors"];
        return returnColors.map((rgb) => {
            return this.rgbToHex(Math.floor(rgb[0]), Math.floor(rgb[1]), Math.floor(rgb[2]));
        });

    }

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
      }
}   

export default RandomPalette;