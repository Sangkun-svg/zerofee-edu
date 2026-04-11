const clients = [
  { name: "장운",           logo: "/icons/clients/learnsy.svg",      height: 33,  width: 74  },
  { name: "SKY MATE",       logo: "/icons/clients/skymate.svg",       height: 30,  width: 145 },
  { name: "누보영어",       logo: "/icons/clients/nubo.svg",          height: 27,  width: 97  },
  { name: "수능의 본질",    logo: "/icons/clients/suneung.svg",       height: 20,  width: 107 },
  { name: "다정북스",       logo: "/icons/clients/dajeong.svg",       height: 29,  width: 94  },
  { name: "대치ON스카",     logo: "/icons/clients/daechi-onska.svg",  height: 21,  width: 122 },
  { name: "대치스터디벙커", logo: "/icons/clients/studybunker.svg",   height: 26,  width: 113 },
  { name: "BEOMJAKA",       logo: "/icons/clients/beomjaka.svg",      height: 17,  width: 136 },
  { name: "김보란영어",     logo: "/icons/clients/kimboran.svg",      height: 24,  width: 77  },
  { name: "이하나영어",     logo: "/icons/clients/ihana.svg",         height: 22,  width: 89  },
  { name: "SKY MATE 2",     logo: "/icons/clients/skymate.svg",       height: 30,  width: 145 },
];

export default function ClientsSection() {
  return (
    <section className="w-full py-36 flex flex-col items-center gap-[52px]">
      <h2 className="text-[#fefefe] text-[28px] font-bold leading-[36px] tracking-[-0.42px] text-center">
        많은 학원과 강사님들이
        <br />
        제로피에듀와 함께하고 있어요
      </h2>

      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-5">
          {clients.slice(0, 6).map((client) => (
            <div key={client.name} className="w-[180px] h-[60px] flex items-center justify-center">
              <img src={client.logo} alt={client.name} style={{ height: client.height, width: client.width }} />
            </div>
          ))}
        </div>
        <div className="flex gap-5">
          {clients.slice(6).map((client) => (
            <div key={client.name} className="w-[180px] h-[60px] flex items-center justify-center">
              <img src={client.logo} alt={client.name} style={{ height: client.height, width: client.width }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
