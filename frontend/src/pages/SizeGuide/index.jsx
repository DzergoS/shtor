import useAPI from "provider/useAPI";
import { translations } from '../../info';

const SizeGuide = () => {
  const {state: {lang}} = useAPI()

  const { sizeGuide } = translations.infoPages;

  const sizes = [
    { size: 'XS', bust: '82-85', waist: '63-66', hips: '87-89' },
    { size: 'S', bust: '86-89', waist: '67-70', hips: '90-94' },
    { size: 'M', bust: '90-93', waist: '71-74', hips: '95-99' },
    { size: 'L', bust: '94-97', waist: '75-79', hips: '100-104' },
    { size: 'XL', bust: '98-102', waist: '80-86', hips: '105-111' },
  ];

  return (
    <div className="info-page-wrapper" style={{textAlign: 'center'}}>
      <h2 className="client__title">
        { sizeGuide.title[lang] }
      </h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <thead>
          <tr>
            <th>{ sizeGuide.size[lang] }</th>
            <th>{ sizeGuide.bust[lang] } (CM)</th>
            <th>{ sizeGuide.waist[lang] } (CM)</th>
            <th>{ sizeGuide.hips[lang] } (CM)</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((row, index) => (
            <tr key={index}>
              <td>{row.size}</td>
              <td>{row.bust}</td>
              <td>{row.waist}</td>
              <td>{row.hips}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeGuide;