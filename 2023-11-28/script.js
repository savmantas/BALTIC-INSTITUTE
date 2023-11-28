let av = "Liam",
ap = "Neeson";
if (av.length < ap.length) {
console.log(av);
} else {
console.log(ap);
}


let v = "Mantas",
p = "Savickas",
gm = 1987,
sm = 2023;
let am = sm - gm;
console.log(
"Aš esu " + v + " " + p + ". Man yra " + am + " metai."
);
let inicialai = (v[0] + ' ' + p[0]);
console.log(inicialai)




let vLength = av.length, pLength = ap.length;
let paskutinesRaides =
av[vLength - 3]+
av[vLength - 2]+
av[vLength - 1]+
ap[pLength - 3]+
ap[pLength - 2]+
ap[pLength - 1];
console.log(paskutinesRaides)


let d = '2023-11-28';
let m = d[1]+d[5];
if(m === '01') console.log('January');
else if (m === '02') console.log('February');
else if (m === '03') console.log('March');
else if (m === '04') console.log('April');
else if (m === '05') console.log('May');
else if (m === '06') console.log('June');
else if (m === '07') console.log('July');
else if (m === '08') console.log('August');
else if (m === '09') console.log('September');
else if (m === '10') console.log('October');
else if (m === '11') console.log('November');
else if (m === '12') console.log('December');
else console.log('Wrong Date Format');
