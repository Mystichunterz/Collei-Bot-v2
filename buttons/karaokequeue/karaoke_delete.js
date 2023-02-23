/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("buttons > karaokequeue > karaoke_join.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { priorityQueue } from "../../responses/server_utility/karaokequeue.js";
import { requeueQueue } from "../../responses/server_utility/karaokequeue.js";
import { karaokeEmbed } from "../../responses/server_utility/karaokequeue.js";

//----------------------
//  main
//----------------------
class KaraokeDeleteButton {
  async run(client, interaction, parameters) {
    karaokeEmbed.delete();
    priorityQueue.clear();
    requeueQueue.clear();
  }
}

export default KaraokeDeleteButton;
