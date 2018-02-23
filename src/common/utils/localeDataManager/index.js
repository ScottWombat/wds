import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import ja from 'react-intl/locale-data/ja';
import th from 'react-intl/locale-data/th';
import de from 'react-intl/locale-data/de';

export default () =>{
    addLocaleData([...es, ...en, ...fr, ...de, ...th, ...ja]);
}
