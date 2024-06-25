import React, { useState } from "react";

interface CardProps {
  name: string;
  tech: string;
}

const Card: React.FC<CardProps> = ({ name, tech }) => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(true);
  };

  const handleNotShow = () => {
    setIsShow(false);
  };

  return (
    <div onMouseEnter={handleShow} onMouseLeave={handleNotShow}>
      <div>
        <div>{name}</div>
        {isShow && (
          <div>
            <div>{tech}</div>
          </div>
        )}
      </div>
    </div>
  );
};

interface PortfolioItem {
  name: string;
  tech: string;
}

const Portfolio: React.FC = () => {
  const list: PortfolioItem[] = [
    {
      name: "Project 1",
      tech: "HTML5, CSS, JS",
    },
    {
      name: "Project 2",
      tech: "React, TypeScript, Node.js",
    },
    {
      name: "Project 3",
      tech: "React, TypeScript, Node.js",
    },
    {
      name: "Project 4",
      tech: "React, TypeScript, Node.js",
    },
  ];

  return (
    <div className="grid justify-center">
      {list.map((item, index) => (
        <Card key={index} name={item.name} tech={item.tech} />
      ))}
    </div>
  );
};

export default Portfolio;
