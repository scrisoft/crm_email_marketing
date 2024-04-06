/**
 * @file Upgrade
 * @package ec
 *
 * @author Ruslan Sirbu
 * @version 0.0.1
 * @updated 2023-12-29
 *
 * This file contains the upgrade icon
 */

// Import icons interface
import { InterfaceIcons } from '../../classes/classes.index.js';

// Icons
const upgrade: InterfaceIcons.Interfaces.Icons = {

    get_icon: (extra: {icon_class: string | undefined}): string => {

        // Set class
        const icon_class = (typeof extra.icon_class !== 'undefined')?' ' + extra.icon_class:'';

        return '<span class="material-symbols-sharp' + icon_class + '">'
            + 'upgrade'
        + '</span>';

    }

}

// Export 
export default upgrade;