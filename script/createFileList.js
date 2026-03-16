const axis = ['axis', 'docs/axis/AXIS_Plus.pdf', 'docs/axis/Green-stage-ceramic-machining.pdf', 'docs/axis/High-Precision-Engravers.pdf', 'docs/axis/High-precision-punches-01-082016.pdf', 'docs/axis/IND RILL+.pdf', 'docs/axis/IND RILL.pdf', 'docs/axis/INDMill-for-Graphite-Application.pdf', 'docs/axis/INDrill-Plus-01012022.pdf', 'docs/axis/IND_RILL.pdf', 'docs/axis/IND_RILL_cool.pdf', 'docs/axis/IND_RILL_medical.pdf', 'docs/axis/NexGen-Coatings-flyer.pdf', 'docs/axis/NexGen-Tools-for-Digital-Dentistry.pdf', 'docs/axis/Single-flute-endmills.pdf', 'docs/axis/Solid_Corbid_sold_mill.pdf', 'docs/axis/Special-tools.pdf', 'docs/axis/Tools-for-cnc-cam-facture.pdf', 'docs/axis/Tools-for-Composite-Machining-02022022.pdf', 'docs/axis/Tools-for-Intraocular-Lenses.pdf', 'docs/axis/Tools-for-jewellery-industry.pdf', 'docs/axis/Tools-for-watch-making.pdf']
const seco = ["seco", "docs/seco/Seco.pdf"]
const sanda = ["sanda", 'docs/sanda/11101.pdf', 'docs/sanda/11102.pdf',
    'docs/sanda/11103.pdf', 'docs/sanda/11104.pdf', 'docs/sanda/11105.pdf',
    'docs/sanda/11106.pdf', 'docs/sanda/11107-11108.pdf', 'docs/sanda/11201-11202.pdf',
    'docs/sanda/11203 - PERMAFINE - Fine Pole Round Permanent Magnetic Chuck.pdf',
    'docs/sanda/11204.pdf', 'docs/sanda/11206 - Radial Pole Permanent Magnetic Chuck.pdf',
    'docs/sanda/12101 - EMAX - Standard Pole Electro Magnetic Rectangular Magnetic Chuck.pdf',
    'docs/sanda/12103.pdf', 'docs/sanda/12105.pdf', 'docs/sanda/12106.pdf',
    'docs/sanda/12201.pdf', 'docs/sanda/12202-12203.pdf', 'do' +
    'cs/sanda/13101.pdf',
    'docs/sanda/13104.pdf', 'docs/sanda/13105.pdf',
    'docs/sanda/13108 - EPSQUARE - 50mm Square Pole Electro Permanent Rectangular Magnetic Chuck.pdf', 'docs/sanda/13110.pdf', 'docs/sanda/13130-13131-MAGNASLOT.pdf', 'docs/sanda/13130-MAGNASLOT-Universal_Machine_Bed.pdf', 'docs/sanda/13201.pdf', 'docs/sanda/21101_Permanent_Magnetic_Lifter.pdf', 'docs/sanda/21102-21103 -hlift-slift.pdf', 'docs/sanda/21104-21105-21106.pdf', 'docs/sanda/22205-22206 - EM Circular Lifter - Heavy Duty-Steel Mill Duty Series.pdf', 'docs/sanda/23101_0209_BATEPM.pdf', 'docs/sanda/23102_0209_EPM_FB.pdf', 'docs/sanda/23103_0209_EPM_TE.pdf', 'docs/sanda/23104_0209_EPM_TB.pdf', 'docs/sanda/23105_0209_EPM_M.pdf', 'docs/sanda/23106_0209_EPM_B.pdf', 'docs/sanda/30101-30102.pdf', 'docs/sanda/31111-31112.pdf', 'docs/sanda/31113-31114-31115.pdf', 'docs/sanda/31116-31117-31203.pdf', 'docs/sanda/31118-31119-31120.pdf', 'docs/sanda/31121-31122-31123.pdf', 'docs/sanda/31124-31202-31125.pdf', 'docs/sanda/34101-34102-34103-34104.pdf', 'docs/sanda/3xxxx-magbase.pdf', 'docs/sanda/41101.pdf', 'docs/sanda/41201-41202-41203-41204.pdf', 'docs/sanda/51101-52201-52101.pdf', 'docs/sanda/52102-52103.pdf', 'docs/sanda/61101.pdf', 'docs/sanda/61102-61201.pdf', 'docs/sanda/61104-61105.pdf', 'docs/sanda/61108.pdf', 'docs/sanda/61202-61103-61207.pdf', 'docs/sanda/61203-62202-61107-62101-61107.pdf', 'docs/sanda/61205-61109.pdf', 'docs/sanda/61206-62204-61208.pdf', 'docs/sanda/71101-71201.pdf', 'docs/sanda/72104.pdf', 'docs/sanda/82101-82201.pdf', 'docs/sanda/90101.pdf', 'docs/sanda/Controller - EM - EPM.pdf', 'docs/sanda/Doublemag - Self Clamping Magnet.pdf', 'docs/sanda/Doublemag-2015.pdf', 'docs/sanda/Electro Magnetic Rectangular Lifter  - 22102.pdf',
    'docs/sanda/EMEPM-2015.pdf', 'docs/sanda/EPCube-2015.pdf', 'docs/sanda/EPFlux-2015.pdf',
    'docs/sanda/EPMill-2015.pdf', 'docs/sanda/EPPress - Magnetic Mould clamping system.pdf',
    'docs/sanda/EPRadial-2015.pdf', 'docs/sanda/EPRail-2015.pdf',
    'docs/sanda/EPRound-EPFluxR-2015.pdf', 'docs/sanda/MagnaSlot-2015.pdf',
    'docs/sanda/MagnaSlot-32-2015.pdf', 'docs/sanda/Magnaslot-50-2015.pdf',
    'docs/sanda/Magnaslot-75-2015.pdf', 'docs/sanda/MagnaSlot-T-2015.pdf',
    'docs/sanda/Magnetic_Chuck_All.pdf', 'docs/sanda/MAGNETIC_LIFTERS_ALL.pdf',
    'docs/sanda/Safebat-2015.pdf', 'docs/sanda/unirow-2015.pdf']

const far = ["far", "docs/far/Far.pdf"]
const gressel = ["gressel", "docs/gressel/Gressel.pdf"]
const nicon = ["nicon", "docs/nicon/Nicon.pdf"]


function createFileList(company) {
    if (document.getElementById(company[0].concat("1"))) { return; }
    var element = document.getElementById("myScrollContainer");
    if (element) {
        element.parentNode.removeChild(element);
    }

    // create a new div element myScrollContainer
    var myScrollContainer = document.createElement("div");
    myScrollContainer.setAttribute("class", `list ${company[0]}`);
    myScrollContainer.setAttribute("id", "myScrollContainer");

    document.getElementById("fileCont").appendChild(myScrollContainer);

    for (let i = 1; i < company.length; i++) {

        let divId = "div".concat(company[0]).concat(`${i}`)
        // DIV
        var div = document.createElement("div");
        div.setAttribute("class", "pdfs");
        div.setAttribute("id", divId);

        var existingDiv = document.getElementById("myScrollContainer");
        existingDiv.appendChild(div)

        // A
        var a = document.createElement("a");
        a.setAttribute("id", company[0].concat(`${i}`));
        a.setAttribute("class", "aImg");
        a.setAttribute("href", `javascript: getNewFile("${company[i]}")`);


        var existingDiv = document.getElementById(divId);
        existingDiv.appendChild(a)

        // Create IMG
        var img = document.createElement("img");
        img.setAttribute("src", "images/pdf.png");
        img.setAttribute("class", "aPdfImg");


        var existingDiv = document.getElementById(company[0].concat(`${i}`));
        existingDiv.appendChild(img)

        // Create p
        var p = document.createElement("p");
        p.textContent = company[i].slice(company[0].length + 6, -4)

        var existingDiv = document.getElementById(company[0].concat(`${i}`));
        existingDiv.appendChild(p)


        // For download button

        // A 
        var a = document.createElement("a");
        a.setAttribute("id", "down".concat(company[0].concat(`${i}`)));
        a.setAttribute("href", company[i]);
        a.setAttribute("target", "'_blank'");
        a.setAttribute("class", "aDown");

        var existingDiv = document.getElementById(divId);
        existingDiv.appendChild(a)

        // Create IMG
        var img = document.createElement("img");
        img.setAttribute("src", "images/download.png");
        img.setAttribute("class", "aDownImg");


        var existingDiv = document.getElementById("down".concat(company[0].concat(`${i}`)));
        existingDiv.appendChild(img)
    }
}

createFileList(axis)

