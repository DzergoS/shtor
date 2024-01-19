import Info from "./pages/Info/Info";

export const PaymentAndDeliveryTitle = ({lang}) => lang === 'ua'
	? "Оплата і доставка"
	: "Payment and delivery"
export const PaymentAndDeliveryText = ({lang}) => lang === 'ua'
	? <>


	</>
	: <>

	</>

export const ReturnsAndExchangeTitle = ({lang}) => lang === 'ua'
	? "Повернення та обмін"
	: "Returns and Delivery"
export const ReturnsAndExchangeText = ({lang}) => lang === 'ua'
	? <>


	</>
	: <>

</>

export const PrivacyPolicyTitle = ({lang}) => lang === 'ua'
	? "Політика Конфіденційності"
	: "Privacy Policy"
export const PrivacyPolicyText = ({lang}) => lang === 'ua'
	? <>

	</>
	: <>

</>


export const translations = {
	header: {
		aboutUs: {
			ua: "Про Нас",
			en: "About Us",
		},
		shop: {
			ua: "Магазин",
			en: "Shop",
		}
	},
	main: {
		utp: {
			ua: "Над уособленням бренду в одному образі довго думати не довелося. На фото молода Людмила - моя мати. Більшої свободи, чуттєвості, самобутності, сили у погляді ніде не зустрічала. Це те, що транслюю і про що я говорю своїми виробами ",
			en: "I didn't have to think for long about embodying the brand in a single image. In the photo, a young Lyudmila is my mother. I haven't encountered greater freedom, sensitivity, authenticity, and strength in a gaze anywhere else. This is what I convey and talk about through my products at ",
		}
	},
	infoPages: {
		care: {
			title: {
				ua: "Догляд",
				en: "Care"
			},
			text : {
				ua: <>
					<p>- Знімайте прикраси перед контактом з водою та початком процедур по догляду за шкірою обличчя та рук;</p>
					<p>- Не розпилюйте парфуми, лак для волосся та інші хімічні речовини безпосередньо на виріб;</p>
					<p>- Уникати взаємодії виробу з лужними миючими засобами, речовинами, що містять хлор і йод, кремами та мазями;</p>
					<p>- Після кожного використання прикрас необхідно їх протирати м’якою тканиною без ворсу;</p>
					<p>- Зберігати прикраси потрібно в мішечках, окремо від інших;</p>
					<p>- Намагайтесь щоб вироби не торкались будь-яких твердих матеріалів, таких як метал;</p>
					<p>- Під час чистки виробів не користуйтесь водою, будь-якими полірувальними засобами які містять в собі спирт, або ультразвуковими полірувальними засобами;</p>
					<p>- Не мийте вироби з перлинами - ніжна очистка м’якою тканиною без ворсу буде достатньою;</p>
					<p>- Метал та природні камені необхідно чистити тільки сухою тканиною та м’якою щіточкою;</p>
					<p>- Надягати прикраси слід в останню чергу -коли Ви вже одягнені.</p>
				</>,
				en: <>
					<p>Exchange and return of products are possible within 14 days after receiving the order.To arrange a return or an exchange of goods, please contact us at: info@shtor.com.ua</p>
					<p>Make sure that the returned product has not been used, is placed in its original packaging, and contains original tags, price tags, and all additional attachments.</p>
					<ul>
						<li>We reserve the right to refuse returns or exchanges if the item does not comply with the above-mentioned rules.</li>
					</ul>
					<p>Goods from the OUTLET section and products made according to individual measurements are not subject to return and exchange.</p>
					<p>You can use any express delivery service for a return (please note that the delivery time should NOT exceed 10 days). SHTOR is not responsible for return shipping costs and customs duties.</p>
					<p>After dispatching the package, please let us know the tracking number of the parcel and leave a link to the tracking website.</p>
					<p>Any disputes which do not fall under the Returns and Exchange policy are subject to individual resolvement through negotiation between the parties involved.</p>
				</>
			}
		},
		paymentDelivery: {
			title: {
				ua: "Оплата і доставка",
				en: "Payment and delivery"
			},
			text: {
				ua: <>
					<p>Шановні клієнти,</p>
					<p>Зверніть увагу, що всі відправлення здійснюються з нашого складу в Одесі (Україна). У зв'язку з війною в нашій країні визначні зміни в термінах доставки. Виготовлення товару триватиме до 10 робочих днів. Зверніть увагу, що бренд не несе відповідальності за місцеві податки.</p>
					<ul>
						<li>ДОСТАВКА В РОСІЮ ТА БІЛОРУСЬ НЕ ДОСТУПНА. Молимося за мир! Стоїмо з Україною!</li>
					</ul>
					<p><strong>Міжнародні замовлення:</strong></p>
					<p>Усі міжнародні замовлення відправляються службою Укрпошта та DHL Express.</p>
					<ul>
						<li>Стандартна доставка - $30 (10-20 робочих днів)</li>
						<li>Експрес-доставка - $60 (5-10 робочих днів)</li>
					</ul>
					<p><strong>Україна:</strong></p>
					<p>Всі замовлення по Україні будуть доставлені службою «Нова Пошта». Термін доставки під час воєнного стану 2-5 робочих днів.</p>
					<p>Безкоштовна доставка</p>
				</>,
				en: <>
					<p>Dear customers,</p>
					<p>Please note that all shipments are from our warehouse in Odesa (Ukraine). Due to the war in our country, there are slight changes in delivery terms.The production of the item will take till 10 business days. Please note that the brand is not responsible for local taxes.</p>
					<ul>
						<li>DELIVERY TO RUSSIA AND BELARUS IS NOT AVAILABLE. We are praying for peace!Stand with Ukraine!</li>
					</ul>
					<p><strong>International orders:</strong></p>
					<p>All international orders will be shipped by Ukrposhta service and DHL Express.</p>
					<ul>
						<li>Standard delivery - $30 (10-20 business days)</li>
						<li>Express delivery - $60 (5-10 business days)</li>
					</ul>
					<p><strong>Ukraine:</strong></p>
					<p>All orders within Ukraine we will be delivered via the Nova Poshta service. The delivery time during martial law is 2-5 business days.</p>
					<p>Free delivery</p>
				</>
			}
		},
		returnsExchange: {
			title: {
				ua: "Повернення та обмін",
				en: "Returns and Delivery"
			},
			text: {
				ua: <>
					<p>Обмін і повернення товару можливі протягом 14 днів після отримання замовлення. Для оформлення повернення або обміну товару, будь ласка, зв'яжіться з нами за адресою: info@shtor.com.ua</p>
					<p>Переконайтеся, що повернений товар не використовувався, він знаходиться в оригінальній упаковці та містить оригінальні бирки, цінники та всі додаткові вкладення.</p>
					<p>Ми залишаємо за собою право відмовити у поверненні або обміні, якщо товар не відповідає вищезазначеним правилам.</p>
					<ul>
						<li>Товари з розділу OUTLET та вироби, виготовлені за індивідуальними мірками, поверненню та обміну не підлягають.</li>
					</ul>
					<p>Ви можете скористатися будь-якою службою експрес-доставки для повернення (зверніть увагу, що термін доставки НЕ повинен перевищувати 10 днів). SHTOR не несе відповідальності за витрати на зворотну доставку та митні збори.</p>
					<p>Після відправлення посилки повідомте нам трек-номер посилки та залиште посилання на сайт відстеження.</p>
					<p>Будь-які суперечки, які не підпадають під політику повернення та обміну, підлягають індивідуальному вирішенню шляхом переговорів між залученими сторонами.</p>
				</>,
				en: <>
					<p>Exchange and return of products are possible within 14 days after receiving the order. To arrange a return or an exchange of goods, please contact us at: info@shtor.com.ua</p>
					<p>Make sure that the returned product has not been used, is placed in its original packaging, and contains original tags, price tags, and all additional attachments.</p>
					<p>We reserve the right to refuse returns or exchanges if the item does not comply with the above-mentioned rules.</p>
					<ul>
						<li>Goods from the OUTLET section and products made according to individual measurements are not subject to return and exchange.</li>
					</ul>
					<p>You can use any express delivery service for a return (please note that the delivery time should NOT exceed 10 days). SHTOR is not responsible for return shipping costs and customs duties.</p>
					<p>After dispatching the package, please let us know the tracking number of the parcel and leave a link to the tracking website.</p>
					<p>Any disputes which do not fall under the Returns and Exchange policy are subject to individual resolvement through negotiation between the parties involved.</p>
				</>
			}
		},
		privacyPolicy: {
			title: {
				ua: "Політика Конфіденційності",
				en: "Privacy Policy"
			},
			text: {
				ua: <>
					<p>SHTOR усвідомлює важливість захисту конфіденційності ваших персональних даних. Ми запровадили сувору політику та заходи безпеки для захисту інформації, яку ви нам надаєте.</p>
					<ol>
						<li>Дані збираються, коли ви робите покупки на нашому веб-сайті або використовуєте наші онлайн-сервіси</li>
					</ol>
					<p><strong>Контактна інформація:</strong> Якщо ви робите покупку онлайн, ми отримаємо ваше ім’я, адресу, адресу електронної пошти, номер телефону та країну проживання. Ми використовуватимемо вашу контактну інформацію, щоб:</p>
					<ul>
						<li>Обробляти ваші покупки/замовлення та будь-які повернення, обміни та скарги, які можуть виникнути щодо вашої покупки</li>
						<li>Спілкуватися з вами щодо вашої покупки, відповідати на будь-які запитання чи коментарі, які можуть виникнути щодо наших продуктів або послуг, і керувати ними. Юридична підстава полягає в тому, що обробка ваших даних необхідна для того, щоб ми могли виконати наші договірні зобов’язання перед вами за договором купівлі-продажу. Ми зберігатимемо ваші дані стільки часу, скільки необхідно для цієї мети. Ми також можемо обробляти ваші контактні дані, щоб інформувати вас електронною поштою, SMS, листами, телефоном, WeChat, Whatsapp та іншими соціальними мережами про наші спеціальні події чи акції. Ви маєте право відхилити наші маркетингові повідомлення в будь-який час, натиснувши посилання для скасування підписки в кожному повідомленні або зв’язавшись зі службою підтримки клієнтів за адресою info@shtor.com.ua</li>
					</ul>
					<p>Дані кредитної картки: Якщо ви робите покупку в Інтернеті та вирішуєте оплатити кредитною карткою, ви надасте інформацію про свою кредитну картку на нашому веб-сайті, щоб завершити покупку. Дані вашої кредитної картки будуть захищені за допомогою Global Sign Encryption. Усі платежі на сайті здійснюються платіжною системою FONDY.</p>
					<p><strong>Інформаційні листи</strong></p>
					<ul>
						<li><strong>Інформаційні листи</strong></li>
					</ul>
					<p>Якщо ви підписалися на одну з наших інформаційних бюлетенів, ми обробимо ваше ім’я, адресу електронної пошти, країну та інформацію про те, чи цікавитеся ви жіночим чи чоловічим одягом, з метою розсилки такого інформаційного бюлетеня. Ви маєте право скасувати підписку на нашу розсилку в будь-який час, натиснувши посилання для скасування підписки, яке міститься в кожній розсилці, або зв’язавшись зі службою підтримки клієнтів за адресою info@shtor.com.ua</p>
				</>,
				en: <>
					<p>SHTOR recognizes the importance of protecting the privacy of your personal data. We have instituted strict policies and security measures to protect the information you provide us.</p>
					<ol>
						<li>Data is collected when you shop on our website or use our online services</li>
					</ol>
					<p><strong>Contact details:</strong> If you make a purchase online we will collect your name, address, e-mail address, telephone number, and country of residence. We will use your contact information to:</p>
					<ul>
						<li>Process your purchase/orders and any returns, exchanges and complaints you may have relating to your purchase</li>
						<li>Communicate with you regarding your purchase and answer and administer any questions or comments you may have regarding our products or services. The legal basis is that it is necessary to process your data in order for us to be able to fulfill our contractual obligations to you under the purchase agreement. We will retain your data for as long as necessary for this purpose. We may also process your contact details to keep you informed, via email, SMS, letters, telephone, WeChat, Whatsapp and other social media, of our special events or promotions. You are entitled to reject our marketing messages at any time by clicking on the unsubscribe link included in each message or by contacting customer service at info@shtor.com.ua</li>
					</ul>
					<p>Credit card details: If you make a purchase online and choose to pay by credit card, you will provide your credit card information on our website to finalize your purchase. Your credit card details will be protected using Global Sign Encryption. All the payments on the website are carried out by FONDY Payment System.</p>
					<p>Newsletter</p>
					<ul>
						<li><strong>Newsletter</strong></li>
					</ul>
					<p>If you have subscribed to one of our newsletters, we will process your name, email address, country and information on whether you are interested in womenswear or menswear for the purpose of sending out such a newsletter. You are entitled to unsubscribe to our newsletter at any time by clicking on the unsubscribe link included in each newsletter or by contacting customer service at info@shtor.com.ua </p>
				</>
			}
		}
	},
	product: {
		description: {
			ua: "Опис",
			en: "Description",
		},
		size: {
			title: {
				ua: "Розмір",
				en: "Size",
			},
			cm: {
				ua: "см",
				en: "cm",
			}
		},
		main: {
			ua: 'Головна',
			en: 'Home'
		},
		currency: {
			ua: '₴',
			en: '$'
		},
		color: {
			"Black": {
				ua: 'Чорний',
				en: 'Black'
			},
			"Dark Brown": {
				ua: 'Темно Коричневий',
				en: 'Dark Brown'
			},
			"Brown": {
				ua: 'Коричневий',
				en: 'Brown'
			},
		},
		attachment: {
			"Без підвісу": {
				ua: 'Без підвісу',
				en: 'No attachment'
			},
			"Срібний ланцюг": {
				ua: 'Срібний ланцюг',
				en: 'Silver chain'
			},
			"Срібна орбіта": {
				ua: 'Срібна орбіта',
				en: 'Silver orbit'
			},
		},
		addToCart: {
			ua: 'Додати у кошик',
			en: 'Add to cart'
		}
	},
	cart: {
		title: {
			ua: 'Кошик',
			en: 'Cart'
		},
		empty: {
			ua: 'Ваш кошик зараз порожній',
			en: 'Your cart is currently empty'
		},
		continueShopping: {
			ua: 'Продовжити покупки',
			en: 'Continue shopping'
		},
		subTotal: {
			ua: 'Проміжний підсумок',
			en: 'Subtotal'
		},
		total: {
			ua: 'Всього',
			en: 'Total'
		},
		checkOut: {
			ua: 'Чек-аут',
			en: 'Check out'
		},
		deliveryAlert: {
			ua: 'Доставка, податки та коди знижки розраховуються під час оформлення замовлення.',
			en: 'Shopping,taxes and discount codes calculated at checkout.'
		},
		quantity: {
			ua: 'Кількість',
			en: 'Quantity'
		}
	}
}
