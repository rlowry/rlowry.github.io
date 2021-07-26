// Return todays date in format dd/mm/yyyy
function todaysDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    var todaysDate = dd + '/' + mm + '/' + yyyy;
    return todaysDate;
}

// Generate PDF
function generatePDF() {

    // Check if GetPlayer function exists, if it does, retrieve values of variables.
    if (typeof window.parent.GetPlayer === 'function') {

        // Retrieve storyline player object from parent window
        var player = window.parent.GetPlayer();

        // Retrieve the learners name from the learnerName variable
        var name = player.GetVar("learnerName");

        // Retrieve the title of the project from projectTitle variable.
        var certFileName = player.GetVar("certFileName");

        // If GetPlayer function does not exist we are probably testing the certificate outwith storyline. Set variables with dummy values for testing.
    } else {
        var name = "Error";
        var certFileName = "Certificate";
    }

    // Define PDF output - See http://pdfmake.org/#/gettingstarted for information on creating a PDF document with pdfmake.
    var dd = {
        // Set page size
        pageSize: 'A4',
        // Set document orientation
        pageOrientation: 'landscape',
        // Set page margins
        pageMargins: [0, 0, 0, 0],

        background: [
            {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="297mm" height="210mm" viewBox="0 0 841.89 595.28"><defs><style>.a{isolation:isolate;}.ae,.b,.c,.f,.i,.l{fill:#3e535a;}.c,.e{opacity:0.5;mix-blend-mode:multiply;}.d,.e{fill:#e15752;}.f,.i{font-size:18.95px;}.ae,.f,.i{font-family:SourceSansPro-Black, Source Sans Pro;font-weight:800;}.f{letter-spacing:0.09em;}.g{letter-spacing:0.02em;}.h{letter-spacing:0.1em;}.i{letter-spacing:0.1em;}.j{letter-spacing:0.02em;}.k{letter-spacing:0.1em;}.l{font-size:13.26px;font-family:SourceSansPro-Regular, Source Sans Pro;}.aa,.l{letter-spacing:0.1em;}.m{letter-spacing:0.08em;}.n{letter-spacing:0.09em;}.o{letter-spacing:0.09em;}.p{letter-spacing:0.09em;}.q{letter-spacing:0.09em;}.r{letter-spacing:0.1em;}.s{letter-spacing:0.09em;}.t{letter-spacing:0.1em;}.u{letter-spacing:0.11em;}.v{letter-spacing:0.11em;}.w{letter-spacing:0.08em;}.x{letter-spacing:0.08em;}.y{letter-spacing:0.1em;}.z{letter-spacing:0.11em;}.ab{letter-spacing:0.04em;}.ac{letter-spacing:0.08em;}.ad{letter-spacing:0.08em;}.ae{font-size:65px;letter-spacing:0.1em;}.af{letter-spacing:0.08em;}.ag{letter-spacing:0.02em;}.ah{letter-spacing:0.1em;}.ai{font-size:31.27px;fill:#e7e7e9;font-family:SourceSansPro-Bold, Source Sans Pro;font-weight:700;letter-spacing:0.1em;}.aj{letter-spacing:0.06em;}.ak{letter-spacing:0.1em;}.al{fill:#273842;}.am{fill:#263741;}</style></defs><title>posterArtboard 1 copy</title><g class="a"><polygon class="b" points="134.84 384.57 -4.79 609.89 -14.17 609.89 -14.17 539.79 45.72 310.28 134.84 384.57"/><polygon class="c" points="134.84 384.57 37.99 339.89 45.72 310.28 134.84 384.57"/><polygon class="d" points="-14.17 286.18 134.84 384.57 128.62 120.36 -14.17 286.18"/><polygon class="e" points="-14.17 286.18 129.36 151.83 128.62 120.36 -14.17 286.18"/><polygon class="b" points="-14.17 -14.18 245.74 -14.18 -14.17 286.18 -14.17 -14.18"/><polygon class="b" points="707.05 211.14 846.67 -14.18 856.06 -14.18 856.06 55.92 796.17 285.43 707.05 211.14"/><polygon class="c" points="707.05 211.14 803.9 255.82 796.17 285.43 707.05 211.14"/><polygon class="d" points="856.06 309.53 707.05 211.14 713.27 475.35 856.06 309.53"/><polygon class="e" points="856.06 309.53 712.53 443.88 713.27 475.35 856.06 309.53"/><polygon class="b" points="856.06 609.89 596.15 609.89 856.06 309.53 856.06 609.89"/><rect class="b" x="213.11" y="311.62" width="415.68" height="1"/><text class="f" transform="translate(245.15 508)">D<tspan class="g" x="13.87" y="0">A</tspan><tspan class="h" x="25.32" y="0">TE</tspan></text><rect class="b" x="190.37" y="487.6" width="161.8" height="1"/><text class="i" transform="translate(512.6 508)">SIGN<tspan class="j" x="49.23" y="0">A</tspan><tspan class="k" x="60.68" y="0">TURE</tspan></text><rect class="b" x="489.73" y="487.6" width="161.8" height="1"/><text class="l" transform="translate(288.22 231.24)">This <tspan class="m" x="32.43" y="0">c</tspan><tspan x="39.53" y="0">ertifi</tspan><tspan class="n" x="73.55" y="0">c</tspan><tspan class="o" x="80.79" y="0">at</tspan><tspan x="94.25" y="0">e is p</tspan><tspan class="p" x="130.27" y="0">r</tspan><tspan x="136.07" y="0">oudly p</tspan><tspan class="p" x="186.71" y="0">r</tspan><tspan x="192.51" y="0">esen</tspan><tspan class="q" x="223.79" y="0">t</tspan><tspan class="r" x="229.41" y="0">ed </tspan><tspan class="s" x="249.99" y="0">t</tspan><tspan class="t" x="255.61" y="0">o</tspan></text><text class="l" transform="translate(172.83 349.33)">lo<tspan class="n" x="13.22" y="0">r</tspan><tspan x="19.02" y="0">em ipsum dolor sit am</tspan><tspan class="n" x="170.17" y="0">e</tspan><tspan class="u" x="177.95" y="0">t</tspan><tspan x="183.85" y="0">, </tspan><tspan class="m" x="192.46" y="0">c</tspan><tspan x="199.55" y="0">onse</tspan><tspan class="n" x="231.44" y="0">c</tspan><tspan class="o" x="238.68" y="0">t</tspan><tspan class="n" x="244.31" y="0">e</tspan><tspan class="r" x="252.08" y="0">tur adipiscing eli</tspan><tspan class="v" x="367.54" y="0">t</tspan><tspan class="r" x="373.44" y="0">. pellen</tspan><tspan class="s" x="424.55" y="0">t</tspan><tspan class="r" x="430.17" y="0">esque sed </tspan><tspan x="0.64" y="15.92">nisl orna</tspan><tspan class="p" x="60.42" y="15.92">r</tspan><tspan class="r" x="66.22" y="15.92">e, tincidunt neque ac, s</tspan><tspan class="w" x="225.76" y="15.92">c</tspan><tspan x="232.86" y="15.92">elerisque eli</tspan><tspan class="u" x="317.1" y="15.92">t</tspan><tspan x="323.01" y="15.92">. c</tspan><tspan class="x" x="338.99" y="15.92">r</tspan><tspan class="t" x="344.6" y="15.92">as neque </tspan><tspan class="y" x="409.08" y="15.92">v</tspan><tspan class="r" x="416.55" y="15.92">eli</tspan><tspan class="z" x="433.75" y="15.92">t</tspan><tspan class="r" x="439.66" y="15.92">, </tspan><tspan class="m" x="448.27" y="15.92">c</tspan><tspan class="r" x="455.36" y="15.92">ongue </tspan><tspan class="n"><tspan x="118.41" y="31.84">e</tspan><tspan class="s" x="126.18" y="31.84">g</tspan><tspan class="p" x="134.01" y="31.84">e</tspan><tspan class="aa" x="141.78" y="31.84">t nulla au</tspan><tspan x="206.66" y="31.84">c</tspan><tspan class="o" x="213.9" y="31.84">t</tspan><tspan class="r" x="219.52" y="31.84">o</tspan><tspan class="ab" x="228.04" y="31.84">r</tspan><tspan class="aa" x="233.21" y="31.84">, finibus g</tspan><tspan class="ac" x="300.86" y="31.84">r</tspan><tspan class="aa" x="306.47" y="31.84">avida e</tspan><tspan class="ad" x="355.18" y="31.84">r</tspan><tspan class="s" x="360.79" y="31.84">a</tspan><tspan class="v" x="368.62" y="31.84">t</tspan><tspan class="r" x="374.52" y="31.84">.</tspan></tspan></text><text class="ae" transform="translate(196.89 139.79)">CE<tspan class="af" x="87.23" y="0">R</tspan><tspan x="133.38" y="0">TIFIC</tspan><tspan class="ag" x="316.55" y="0">A</tspan><tspan class="ah" x="355.81" y="0">TE</tspan></text><polygon class="d" points="579.47 191.18 253.41 191.18 262.41 155.33 588.47 155.33 579.47 191.18"/><text class="ai" transform="translate(285.45 183.77)">OF <tspan class="aj" x="53.4" y="0">C</tspan><tspan class="ak" x="73.57" y="0">OMPLETION</tspan></text><path class="al" d="M802.17,557.1H39.72V38.18H802.17Zm-760.45-2H800.17V40.18H41.72Z"/><polygon class="am" points="94.01 44.18 400.68 44.18 400.68 34.18 104.17 34.18 94.01 44.18"/><polygon class="d" points="697.84 44.18 801.17 44.18 801.17 34.18 708.01 34.18 697.84 44.18"/><polygon class="am" points="747.88 561.1 441.21 561.1 441.21 551.1 737.72 551.1 747.88 561.1"/><polygon class="d" points="144.05 561.1 40.72 561.1 40.72 551.1 133.88 551.1 144.05 561.1"/><polygon class="am" points="806.17 77.91 806.17 384.57 796.17 384.57 796.17 88.07 806.17 77.91"/><polygon class="d" points="806.17 452.76 806.17 556.1 796.17 556.1 796.17 462.93 806.17 452.76"/><polygon class="am" points="45.72 517.37 45.72 210.7 35.72 210.7 35.72 507.2 45.72 517.37"/><polygon class="d" points="45.72 142.51 45.72 39.18 35.72 39.18 35.72 132.34 45.72 142.51"/></g></svg>',
                width: 841.89,
                height: 595.28
            }
        ],

        // Define main body of document
        content: [

            // Include learner name 
            {
                text: name,
                fontSize: 40,
                alignment: 'center',
                absolutePosition: { x: 0, y: 260 },
                color: '#3E535A'
            },
            // Include date
            {
                text: todaysDate(),
                fontSize: 16,
                alignment: 'center',
                absolutePosition: { x: -300, y: 465 },
                color: '#3E535A'
            }
        ]
    };

    pdfMake.createPdf(dd).download(certFileName + '.pdf');
}