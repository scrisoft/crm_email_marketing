/**
 * @file Save
 * @package ec
 *
 * @author Ruslan Sirbu
 * @version 0.0.1
 * @updated 2023-12-29
 *
 * This file contains the save icon
 */

// Import icons interface
import { InterfaceIcons } from '../../classes/classes.index.js';

// Icons
const save: InterfaceIcons.Interfaces.Icons = {

    get_icon: (extra: any): string => {

        // Set class
        let icon_class = (typeof extra?.['icon_class'] !== 'undefined')?' ' + extra.icon_class:'';

        return '<span class="material-symbols-sharp' + icon_class + '">'
            + 'save'
        + '</span>';

    }

}

// Export 
export default save;