import { Doctor } from '../../src/model/doctor';

let latency = 2000;
let id = 0;
const DOCTORS = [
    { id: 25111, title: "Dr. med.", lastname: "Aeschbacher", firstname: "Beat C.", address: "Schänzlistr. 33", zip: "3000", city: "Bern 25", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 23996, title: "Dr. med.", lastname: "Burger", firstname: "Peter", address: "Schänzlistr. 33", zip: "3000", city: "Bern 25", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 6025, title: "Dr. med.", lastname: "Durrer", firstname: "Arnold", address: "Schifflaube 16", zip: "3000", city: "Bern 13", speciality: null, docType: ["casamed"] },
    { id: 9535, title: "Dr. med.", lastname: "Durrer", firstname: "Arnold", address: "Schifflaube 16", zip: "3000", city: "Bern 13", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 28367, title: "Dr. med.", lastname: "Friedli", firstname: "Peter", address: "Willadingweg 48", zip: "3000", city: "Bern 15", speciality: "Allgemeinpraktiker", docType: ["casamed"] },
    { id: 28946, title: "med. prakt.", lastname: "Grubenmann", firstname: "Stephan", address: "Thunstr. 113", zip: "3000", city: "Bern 15", speciality: "praktischer Arzt / Ärztin", docType: ["casamed"] },
    { id: 29491, title: "Dr. med.", lastname: "Guggisberg", firstname: "Andreas", address: "Thunstr. 99", zip: "3000", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 27306, title: "Dr. med.", lastname: "Hoigné", firstname: "Philipp", address: "Schänzlistr. 33", zip: "3000", city: "Bern 25", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 24552, title: "Dr. med.", lastname: "Kaufmann", firstname: "Urs", address: "Schänzlistr. 33", zip: "3000", city: "Bern 25", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 24109, title: "Dr. med.", lastname: "Loretan", firstname: "Patrick", address: "Schänzlistr. 33", zip: "3000", city: "Bern 25", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 24980, title: "Dr. med.", lastname: "Millauer", firstname: "Niklas", address: "Schänzlistr. 33", zip: "3000", city: "Bern 25", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 26823, title: "Dr. med.", lastname: "Müller", firstname: "Christian", address: "Schänzlistr. 33", zip: "3000", city: "Bern 25", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 25204, title: "Dr. med.", lastname: "Noti", firstname: "Christof", address: "Schänzlistr. 33", zip: "3000", city: "Bern 25", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 839, title: "Dr. med.", lastname: "Oswald", firstname: "Walter", address: "Jupiterstrasse 65", zip: "3000", city: "Bern 15", speciality: null, docType: ["casamed"] },
    { id: 22115, title: "Dr. med.", lastname: "Pavlicek", firstname: "Michael", address: "Schänzlistr. 33", zip: "3000", city: "Bern", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 871, title: "Dr. med.", lastname: "Rohr", firstname: "Markus", address: "Monbijoustrasse 75", zip: "3000", city: "Bern 23", speciality: null, docType: ["casamed"] },
    { id: 8757, title: "Dr. med.", lastname: "Schäfer", firstname: "Stefan", address: "Lerberstr. 7", zip: "3000", city: "Bern 8", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 25182, title: "Dr. med.", lastname: "Sennwald", firstname: "Brigitte", address: "Sempachstr. 22", zip: "3000", city: "Bern 25", speciality: "praktischer Arzt / Ärztin", docType: ["casamed"] },
    { id: 23511, title: "Dr. med.", lastname: "Stuber", firstname: "Thomas", address: "Schänzlistr. 33", zip: "3000", city: "Bern", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 22485, title: "Dr. med.", lastname: "Walser", firstname: "Peter", address: "Helvetiastr. 5", zip: "3000", city: "Bern", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 29159, title: "Dr. med.", lastname: "Walther", firstname: "Marcel", address: "Marktgass-Passage 3", zip: "3000", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 31558, title: null, lastname: "swiss-ortho-core AG", firstname: "", address: "Schänzlistrasse 39", zip: "3000", city: "Bern", speciality: "Gruppenpraxen", docType: ["casamed"] },
    { id: 31501, title: null, lastname: "Arcovita", firstname: "Praxis", address: "Bubenbergpl.", zip: "3001", city: "Bern", speciality: "Gruppenpraxen", docType: ["casamed"] },
    { id: 26826, title: null, lastname: "Balsiger", firstname: "Bruno Markus", address: "Bremgartenstr. 119", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Magen-", docType: ["casamed"] },
    { id: 10167, title: "Dr. med.", lastname: "Battaglia", firstname: "Markus", address: "Bubenbergplatz 11", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 26639, title: "Dr. med.", lastname: "Baumann", firstname: "Christa Katharina", address: "Bremgartenstr. 119", zip: "3001", city: "Bern", speciality: "Medizinische Onkologie", docType: ["casamed"] },
    { id: 21419, title: "Dr. med.", lastname: "Berger Füglister", firstname: "Matthias", address: "Bubenbergpl. 8", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 26636, title: "Dr. med.", lastname: "Bättig", firstname: "Marianne", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Pädiatrie", docType: ["casamed"] },
    { id: 31367, title: "Dr. med.", lastname: "Böhm", firstname: "Steffen", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Medizinische Onkologie", docType: ["casamed"] },
    { id: 23579, title: "Dr. med.", lastname: "Bürge", firstname: "Markus Alex", address: "Morillonstr. 75", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 9507, title: "Dr. med.", lastname: "Camponovo", firstname: "Fausto", address: "Spitalgasse 38", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 24584, title: "Dr. med.", lastname: "Casty-Marchand", firstname: "Adrian R.", address: "Bremgartenstr. 119", zip: "3001", city: "Bern", speciality: "Medizinische Onkologie", docType: ["casamed"] },
    { id: 25840, title: "Dr. med.", lastname: "Coninx", firstname: "Severin", address: "Bremgartenstr. 119", zip: "3001", city: "Bern", speciality: "Medizinische Onkologie", docType: ["casamed"] },
    { id: 27008, title: "Dr. med.", lastname: "Di Zio-Egli", firstname: "Evelyne", address: "Spitalgasse 38", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed", "hmo"] },
    { id: 10169, title: "Dr. med.", lastname: "Escher", firstname: "Albert", address: "Bubenbergplatz 11", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 22292, title: "Dr. med.", lastname: "Fischer Biner", firstname: "Reta", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Lungen", docType: ["casamed"] },
    { id: 28439, title: "Dr. med.", lastname: "Frey", firstname: "Peter", address: "Bremgartenstr. 119", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Magen-", docType: ["casamed"] },
    { id: 10171, title: "Dr. med.", lastname: "Gerber Rihs", firstname: "Christine", address: "Bubenbergplatz 11", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 9617, title: "Dr. med.", lastname: "Göldlin", firstname: "Adrian", address: "Bubenbergpl. 8", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 28976, title: "Dr. med.", lastname: "Hodler Troxler", firstname: "Catherine", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Pädiatrie", docType: ["casamed"] },
    { id: 31200, title: null, lastname: "Interregionale Blutspende SRK AG", firstname: "", address: "Murtenstr. 133", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Hämato", docType: ["casamed"] },
    { id: 30885, title: "Dr. med.", lastname: "Leuenberger Eychmüller", firstname: "Elisabeth", address: "Riedweg 3", zip: "3001", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 21418, title: "Dr. med.", lastname: "Lobsiger", firstname: "Corina", address: "Bubenbergplatz 11", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 22980, title: "Dr. med.", lastname: "Mordasini", firstname: "Carlo", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Lungen", docType: ["casamed"] },
    { id: 24089, title: "Dr. med.", lastname: "Mueller", firstname: "Ulrich", address: "Morillonstr. 75 - 91", zip: "3001", city: "Bern", speciality: "Allergologie und klinische Immunologie", docType: ["casamed"] },
    { id: 29530, title: "Dr. med.", lastname: "Ott", firstname: "Corinne", address: "Riedweg 3", zip: "3001", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 21412, title: "Dr. med.", lastname: "Rigamonti", firstname: "Véronique", address: "Bubenbergpl. 8", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Hämato", docType: ["casamed"] },
    { id: 26224, title: "Dr. med.", lastname: "Rüsges-Wolter", firstname: "Ilka", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Hämato", docType: ["casamed"] },
    { id: 29189, title: "Dr. med.", lastname: "Saurer", firstname: "Katharina", address: "Riedweg 3", zip: "3001", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 29031, title: "Dr. med.", lastname: "Schilter", firstname: "Daniel", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Lungen", docType: ["casamed"] },
    { id: 26439, title: "Dr. med.", lastname: "Schmid Richard", firstname: "Iris Andrea", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Lungen", docType: ["casamed"] },
    { id: 17287, title: "Dr. med.", lastname: "Schönberger", firstname: "Jost Christian Werner", address: "Bremgartenstr. 119", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 28186, title: "Dr. med.", lastname: "Seiler", firstname: "Anton Johannes", address: "Konsumstr. 16a", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 21417, title: "med. prakt.", lastname: "Spiess", firstname: "Reto", address: "Bubenbergplatz 8", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 25871, title: "Dr. med.", lastname: "Stirnimann", firstname: "Andrea", address: "Bubenbergplatz 11", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 23394, title: "Dr. med.", lastname: "Stuck", firstname: "Andreas", address: "Morillonstr. 75 - 91", zip: "3001", city: "Bern", speciality: "Physikalische Medizin und Rehabilitation", docType: ["casamed"] },
    { id: 23897, title: "Dr. med.", lastname: "Troendle", firstname: "Amineh", address: "Bremgartenstr. 119", zip: "3001", city: "Bern", speciality: "Endokrinologie/Diabetologie", docType: ["casamed"] },
    { id: 23084, title: "Dr. med.", lastname: "Vella-Eicher", firstname: "Silvano", address: "Bremgartenstr. 115", zip: "3001", city: "Bern", speciality: "Pädiatrie", docType: ["casamed"] },
    { id: 26426, title: "Dr. med.", lastname: "Vetsch", firstname: "Gabriele", address: "Bremgartenstr. 117", zip: "3001", city: "Bern", speciality: "Innere Medizin, spez. Hämato", docType: ["casamed"] },
    { id: 24322, title: "Dr. med.", lastname: "Viollier", firstname: "Anne-Françoise", address: "Viktoriastr. 77", zip: "3001", city: "Bern", speciality: "Medizinische Onkologie", docType: ["casamed"] },
    { id: 16225, title: "Dr. med.", lastname: "Walter", firstname: "Christian", address: "Bubenbergpl. 8", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 26253, title: "Dr. med.", lastname: "Waschkowski", firstname: "Lucija", address: "Bremgartenstrasse 117", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 25732, title: "Dr. med.", lastname: "Weiss", firstname: "Matthias", address: "Morrillonstr. 75-91", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 17472, title: "Dr. med.", lastname: "Wendel Beck", firstname: "Marianne", address: "Bubenbergpl. 11", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 24776, title: "Dr. med.", lastname: "Willi", firstname: "Amara", address: "Spitalgasse 38", zip: "3001", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 408, title: "Dr. med.", lastname: "Berthold", firstname: "Martina", address: "Reichenbachstrasse 41", zip: "3004", city: "Bern", speciality: null, docType: ["casamed"] },
    { id: 9441, title: "Dr. med.", lastname: "Berthold-Keller", firstname: "Martina", address: "Reichenbachstr. 41", zip: "3004", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 25223, title: "Dr. med.", lastname: "Breitenbücher", firstname: "Albrecht", address: "Tiefenaustr. 112", zip: "3004", city: "Bern", speciality: "Innere Medizin, spez. Lungen", docType: ["casamed"] },
    { id: 9836, title: "Dr. med.", lastname: "Miloni", firstname: "Erwin", address: "Reichenbachstrasse 51", zip: "3004", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 26500, title: "med. prakt.", lastname: "Schindler", firstname: "Kathrin", address: "Reichenbachstr. 122", zip: "3004", city: "Bern", speciality: "Pädiatrie", docType: ["casamed"] },
    { id: 388, title: "Dr. med.", lastname: "Barben", firstname: "Hanna", address: "Dufourstrasse 28", zip: "3005", city: "Bern", speciality: null, docType: ["casamed"] },
    { id: 9420, title: "Dr. med.", lastname: "Barben Halter", firstname: "Hanna", address: "Dufourstr. 28", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 29187, title: "Dr. med.", lastname: "Bratschi", firstname: "Hans Ulrich", address: "Thunstr. 27", zip: "3005", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 27787, title: "Dr. med.", lastname: "Chételat", firstname: "Claude-André", address: "Thunstr. 2", zip: "3005", city: "Bern", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 29829, title: "Dr. med.", lastname: "Cimber", firstname: "Hugo", address: "Jubiläumsplatz 5", zip: "3005", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 9522, title: "Dr. med.", lastname: "Darbellay", firstname: "Jean-Luc", address: "Englische Anlagen 6", zip: "3005", city: "Bern", speciality: "praktischer Arzt / Ärztin", docType: ["casamed"] },
    { id: 487, title: "Dr. med.", lastname: "Darbellay", firstname: "Jean-Luc", address: "Luisenstrasse 6", zip: "3005", city: "Bern", speciality: null, docType: ["casamed"] },
    { id: 17170, title: "Dr. med.", lastname: "Flammer", firstname: "Marc", address: "Thunstr. 13", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 24234, title: "Dr. med.", lastname: "Frank", firstname: "Rudolf", address: "Thunstr. 2", zip: "3005", city: "Bern", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 29293, title: "Dr. med.", lastname: "Fravi", firstname: "Rosina", address: "Thunstr. 27", zip: "3005", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 9624, title: "Dr. med.", lastname: "Gruber", firstname: "Bruno", address: "Thunstr. 22", zip: "3005", city: "Bern", speciality: "praktischer Arzt / Ärztin", docType: ["casamed"] },
    { id: 585, title: "Dr. med.", lastname: "Gruber", firstname: "Bruno", address: "Thunstrasse 32", zip: "3005", city: "Bern", speciality: null, docType: ["casamed"] },
    { id: 28325, title: "Dr. med.", lastname: "Hagmann", firstname: "Andreas", address: "Thunstr. 2", zip: "3005", city: "Bern", speciality: "Innere Medizin, spez. Herzkrankheiten", docType: ["casamed"] },
    { id: 9647, title: "Dr. med.", lastname: "Halter", firstname: "Urs", address: "Dufourstr. 28", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 609, title: "Dr. med.", lastname: "Halter", firstname: "Urs ", address: "Dufourstrasse 28", zip: "3005", city: "Bern", speciality: null, docType: ["casamed"] },
    { id: 24660, title: "Dr. med.", lastname: "Herrmann", firstname: "Beat", address: "Aegertenstr. 1", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 9710, title: "Dr. med.", lastname: "Jenni", firstname: "Viktor Bruno", address: "Thunstr. 22", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 10181, title: "Dr. med.", lastname: "Jenny", firstname: "Bruno", address: "Marzilistr. 7", zip: "3005", city: "Bern", speciality: "praktischer Arzt / Ärztin", docType: ["casamed"] },
    { id: 673, title: "Dr. med.", lastname: "Jordi", firstname: "Anne-Lise", address: "Luisenstrasse 7", zip: "3005", city: "Bern", speciality: null, docType: ["casamed"] },
    { id: 9711, title: "Dr. med.", lastname: "Jordi-Racine", firstname: "Anne-Lise", address: "Luisenstr. 7", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 9724, title: "Dr. med.", lastname: "Kaufmann", firstname: "Dagmar", address: "Thunstr. 22", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 687, title: "Dr. med.", lastname: "Kaufmann", firstname: "Dagmar", address: "Thunstrasse 22", zip: "3005", city: "Bern", speciality: null, docType: ["casamed"] },
    { id: 28914, title: "Dr. med.", lastname: "Leupin", firstname: "Luca", address: "Dufourstr. 45", zip: "3005", city: "Bern", speciality: "Medizinische Onkologie", docType: ["casamed"] },
    { id: 29954, title: "Dr. med.", lastname: "Loser van der Weg", firstname: "Melanie", address: "Weststr. 35", zip: "3005", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 30950, title: "Dr. med.", lastname: "Meisels-Bürgi", firstname: "Judith", address: "Thunstr. 27", zip: "3005", city: "Bern", speciality: "Gynäkologie und Geburtshilfe", docType: ["casamed"] },
    { id: 9866, title: "Dr. med.", lastname: "Negri", firstname: "Paolo", address: "Thunstr. 13", zip: "3005", city: "Bern", speciality: "Allgemeine innere Medizin", docType: ["casamed"] },
    { id: 827, title: "Dr. med.", lastname: "Negri", firstname: "Paolo", address: "Thunstrasse 13", zip: "3005", city: "Bern", speciality: null, docType: ["casamed"] },
    { id: 10183, title: "Dr. med.", lastname: "Oettli", firstname: "Rosmarie", address: "Thormannstr. 68", zip: "3005", city: "Bern", speciality: "praktischer Arzt / Ärztin", docType: ["casamed"] },
    { id: 16222, title: "Dr. med.", lastname: "Ruoff", firstname: "Marianne", address: "Kirchenfeldstr. 31", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] },
    { id: 9961, title: "Dr. med.", lastname: "Schläppi", firstname: "Peter", address: "Brückenstr. 1", zip: "3005", city: "Bern", speciality: "Allgemeine Innere Medizin", docType: ["casamed"] }
]

/* Faking the REST API to fetch the doctor data. The latency can be set by the variable "latency" above. */
export class WebAPI {
    isRequesting = false;

    getDoctors(docType: string, name: string): Promise<Doctor[]> {
        this.isRequesting = true;
        return new Promise(resolve => {
            setTimeout(() => {
                let results = DOCTORS.map(x => {
                    return {
                        id: x.id,
                        title: x.title,
                        firstname: x.firstname,
                        lastname: x.lastname,
                        address: x.address,
                        zip: x.zip,
                        city: x.city,
                        speciality: x.speciality,
                        docType: x.docType
                    }
                }).filter(x => {
                    return !(
                        name != null && !x.lastname.toLowerCase().match(name.toLowerCase()) && !x.firstname.toLowerCase().match(name.toLowerCase()) ||
                        docType != null && !x.docType.includes(docType)
                        );
                });
                resolve(results);
                this.isRequesting = false;
            }, latency);
        });
    }
}