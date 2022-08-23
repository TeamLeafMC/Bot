
import { InteractionHandler, InteractionHandlerTypes, PieceContext } from '@sapphire/framework';
import type { ButtonInteraction } from 'discord.js';

export default class extends InteractionHandler {
	public constructor(ctx: PieceContext) {
		super(ctx, { interactionHandlerType: InteractionHandlerTypes.Button });
	}

	public async parse(interaction: ButtonInteraction) {
		if (interaction.customId !== 'rules') return this.none();
		return this.some();
	}

	public async run(interaction: ButtonInteraction) {
        interaction.reply({content: "**Leaf MC Support**\nNeed help? Want to report someone? This is the place!. We have a simple set of rules that we ask everyone to follow when opening a ticket.\n\n**Guidelines**\n• Be respectful to our staff, we are trying to help you.\n• Provide a detailed description of your issue/question.\n• Have patience and don't spam @mentions, opening a ticket already notifies us.", ephemeral: true})
    }
}
