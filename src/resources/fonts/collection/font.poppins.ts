/**
 * @class Poppins
 * @package ec
 *
 * @author Ruslan Sirbu
 * @version 0.0.1
 * @updated 2023-12-30
 *
 * This class creates the poppins font support
 */

// Import fonts interface
import { InterfaceFonts } from '../../../classes/classes.index.js';

// Import types
import { font_type } from '../../types/types.index.js';

// Namespace
export namespace Resources.Fonts {

    // Class
    export class Poppins implements InterfaceFonts.Interfaces.Fonts {

        /**
         * Gets the font's info
         * 
         * @returns font_type with font's information
         */
        get_info = (): font_type => {

            return {
                name: 'Poppins',
                slug: 'poppins',
                link: 'family=Poppins:wght@100;200;300;400;500;600;700;800;900',
                property: '\'Poppins\', sans-serif',
                weight: [
                    100,
                    200,
                    300,
                    400,
                    500,
                    600,
                    700,
                    800,
                    900
                ]
            }

        };

    }

}