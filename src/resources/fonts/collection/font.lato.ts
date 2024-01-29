/**
 * @class Lato
 * @package ec
 *
 * @author Ruslan Sirbu
 * @version 0.0.1
 * @updated 2023-12-30
 *
 * This class creates the lato font support
 */

// Import fonts interface
import { InterfaceFonts } from '../../../classes/classes.index.js';

// Import types
import { font_type } from '../../types/types.index.js';

// Namespace
export namespace Resources.Fonts {

    // Class
    export class Lato implements InterfaceFonts.Interfaces.Fonts {

        /**
         * Gets the font's info
         * 
         * @returns font_type with font's information
         */
        get_info = (): font_type => {

            return {
                name: 'Lato',
                slug: 'lato',
                link: 'family=Lato:wght@100;300;400;700;900',
                property: '\'Lato\', sans-serif',
                weight: [
                    100,
                    300,
                    400,
                    700,
                    900
                ]
            }

        };

    }

}