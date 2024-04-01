var names=new Array();
names[0]="Yaakov";
names[1]="Kofi";
names[2]="John";
names[3]="Jason";
names[4]="Emmanuel";
names[5]="frank";
names[6]="victoria";
names[7]="sammy";
names[8]="laura";
names[9]="jimo";

for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye  "+ names[i]);
    }
    else{
        console.log("Hello  "+ names[i]);
    }
}
