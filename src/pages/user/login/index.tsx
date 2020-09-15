import React from 'react';
import {Document, Page, pdf, Text, View} from "@react-pdf/renderer";

const Login: React.FC<{}> = () => {
    const pdfClickHandler = async () => {
        console.time("PDF generation took:");
        await pdf(
            <Document>
                <Page>
                    <View>
                        {
                            Array.from(Array(150).keys()).map((key) => <Text key={key}>text-element</Text>)
                        }
                    </View>
                </Page>
            </Document>
        ).toBlob()
        console.timeEnd("PDF generation took:");
    }

    return (
        <div>
            <button onClick={pdfClickHandler}>Generate slow PDF (with ant-design-pro)</button>
        </div>
    );
}

export default Login;
