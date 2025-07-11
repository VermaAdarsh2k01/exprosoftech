interface ClientsProps {
  data: {
    clients: Array<{
      name: string;
      logo: string;  // This will be the resolved URL
    }>;
  };
}

export const Clients = ({ data }: ClientsProps) => {
  // Extract client logos from props
  const clientLogos = data.clients.map(client => client.logo);

  return (
    <section className="section my-24">
      <div className="max-w-[85rem] mx-auto px-3 overflow-hidden">
        <div className="row">
          <div className="col-12" data-aos="fade-up-sm">
            <div className="text-center sm:flex sm:flex-col">
              <p className="text-black pt-4 text-[1.5rem] font-bold">
                We have been working with some Fortune{" "}
                <span className="text-primary">500+</span> clients
              </p>
            </div>
          </div>
          <div
            className="col-12 pt-10"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="marquee">
              <div className="marquee-track">
                {[...Array(2)].map((_, index: number) => (
                  <div key={index} className="marquee-content">
                    {clientLogos.map((logo: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center mx-8"
                      >
                        <img
                          src={logo}
                          alt="brand logo"
                          className="w-32 h-16 object-contain"
                          width="128"
                          height="64"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .marquee {
            position: relative;
            width: 100%;
            overflow: hidden;
            max-width: 100vw;
          }

          .marquee::before,
          .marquee::after {
            content: "";
            position: absolute;
            top: 0;
            width: 10rem;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }

          .marquee::before {
            left: 0;
            background: linear-gradient(to right, white, transparent);
          }

          .marquee::after {
            right: 0;
            background: linear-gradient(to left, white, transparent);
          }

          .marquee-track {
            display: flex;
            opacity: 1;
            width: fit-content;
            animation: scroll 30s linear infinite;
            max-width: none;
          }

          .marquee-content {
            display: flex;
            align-items: center;
            white-space: nowrap;
            flex-shrink: 0;
            max-width: none;
          }

          .marquee-content img {
            max-width: none;
            width: 128px;
            height: 64px;
            object-fit: contain;
          }

          .marquee-content > div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 160px; /* Fixed width container */
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee:hover .marquee-track {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};
