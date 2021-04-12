import React from "react";

const FooterCol = (props: any) => {
    return (
        <div className="col-md-3">
            <h6 className="text-primary">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {props.menuItems.map((item: any, index: any) => (
                    <li key={index}>
                        <h6 className="text-secondary">{item.name}</h6>
                        {/* <Link to={item.link} className="text-secondary">
                            {item.name}
                        </Link> */}
                    </li>
                ))}
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;