import Event from "../classes/Event.js";

class Ready extends Event {
    async run(){
        console.log(`Trainee Forest Ranger Collei reporting for duty!\nI will ensure your safe passage through this forest!\n\nLogged in as ${this.client.user.tag}!`)
    }
}

export default Ready