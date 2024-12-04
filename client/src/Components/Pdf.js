import React from 'react'
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
function Pdf() {
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: '#E4E4E4',
          padding: 100,
        },
        section: {
          margin: 10,
          padding: 10,
          fontSize: 12,
        },
      })
  return (
    <>
          <Document>
             <Page style={styles.page}>
                <View style={styles.section}>
                    <Text>Hello</Text>
                </View>
             </Page>
          </Document> 
    </>
  )
}

export default Pdf;
