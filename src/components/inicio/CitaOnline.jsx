import whatsApp from '../../images/whatsapp.png'

import './citaOnline.css'

function CitaOnline() {
  return (
    <section id='citaOnline' className='citaOnline'>
      <section className="description">
        <h3>Ahora puedes agendar tu cita ONLINE</h3>
        <p>Tener a tu doctora o doctor en casa, ahora es mucho más sencillo.</p>
      </section>
      <section className="numeros">
        <a href="https://www.google.com/search?q=grupo%20m%C3%A9dico%20bosques&oq=Grupo+M%C3%A9dico+Bosques&aqs=chrome.0.35i39j69i59j35i39j0i22i30l2j69i60l3.5723j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk02xfhNmOnpbgnr57hDzbkvmRMn1uA:160563254
        6912&rflfq=1&num=10&rldimm=11477260673409094269&lqi=ChVncnVwbyBtw6lkaWNvIGJvc3F1ZXNaLgoVZ3J1cG8gbcOpZGljbyBib3NxdWVzIhVncnVwbyBtw6lkaWNvIGJvc3F1ZXM&ved=2ahUKEwiXo-Ssh4rtAhVEmK0KHQxXBzoQvS4wAHoECAwQLw&rlst=f#rlfi=hd:;si:11477260673409094269,l,ChVncnVwbyBtw6lka
        WNvIGJvc3F1ZXNaLgoVZ3J1cG8gbcOpZGljbyBib3NxdWVzIhVncnVwbyBtw6lkaWNvIGJvc3F1ZXM;mv:[[19.468046671743014,-99.04411103661396],[19.461876134842083,-99.05608441765644],null,[19.464961432651283,-99.0500977271352],17]" target="_blank" rel='noreferrer'><p>Llámanos al 55 5766-1236 o al 55 5794-4084</p></a>
        <a href="https://api.whatsapp.com/send?phone=525532657988&fbclid=IwAR1WmMkWK_L1kHTIF-T5p5d0L1_JK54l1V2feqpxUjyUUV017HR21UNnDRs" target="_blank" rel='noreferrer' className="whatsApp">
            <figure>
                <img src={whatsApp} alt="Logo Whatsapp" />
            </figure>
            <figcaption>+52 55 3265 7988</figcaption>
        </a>
      </section>
    </section>
  )
}

export default CitaOnline
