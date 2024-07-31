import React from "react";
import { QRCodeSVG } from 'qrcode.react';
import { QRCodeCanvas } from 'qrcode.react';


export default function Style1() {
    return (
        <div>
            <h2>SVG QRcode</h2>
            <QRCodeSVG value="https://reactjs.org/" />
            <h2>Canvas QRcode</h2>
            <QRCodeCanvas value="https://reactjs.org/" />
            <h3>Medium-SVG</h3>
            <QRCodeSVG value="https://medium.com/me/stories/drafts"
                size={50}
                bgColor={"#ffffff"}
                fgColor={"#828f1e"}
                marginSize={20} />
            <hr></hr>
            <h3>Medium-Canvas</h3>
            <QRCodeCanvas
                value="https://medium.com/me/stories/drafts"
                size={100}
                bgColor={'#4F9D9D'}
                fgColor={"#828f1e"}
                level='L'
                minVersion={40}
                marginSize={100}
                imageSettings={{
                    src: "https://static.zpao.com/favicon.png",
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                    opacity: 0.5,
                }}
            />
        </div>
    )

}