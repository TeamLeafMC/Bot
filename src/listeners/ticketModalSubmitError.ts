import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import { webhookSubmit } from '../lib/webhookSubmit';
import db from "quick.db"

@ApplyOptions<ListenerOptions>({})
export class UserEvent extends Listener {
  public run(e: any) {
    webhookSubmit("RED", `Error: ${e}`)
    this.container.client.user?.setActivity(`${db.get("current_ticket")} tickets`, {
      type: "WATCHING"
    })
  }
}