let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");

	

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

         
          descr.textContent = data[attr].description;

		
     })
})

let data = {
     french: {
          title: "Բարև աշխարհ",
          description: " WhiteHaX Cyber ​​​​Readiness Verification: Reconnu par certains des plus grands assureurs cybernétiques avec des dizaines de milliers de licences déployées, WhiteHaX est une plate-forme de vérification de la cyber-préparation (pen-test) hébergée dans le cloud et automatisée. La version de cyber-assurance WhiteHaX fournit une vérification rapide (moins de 15 minutes) sans installation, sans impact, de la cyber-préparation d'une entreprise en simulant plusieurs scénarios de menace contre l'infrastructure de sécurité déployée par l'entreprise, y compris les défenses du périmètre du réseau et les terminaux. sécurité et contrôles. Les scénarios de menaces simulées incluent les attaques de pare-feu, les attaques des utilisateurs depuis Internet telles que les téléchargements en voiture, le phishing/spoofing/spamming par e-mail, les ransomwares, les tentatives d'exfiltration de données et autres. Les 3 types d'analyses de réseau permettent aux entreprises de vérifier les menaces potentielles de propagation de logiciels malveillants/ransomwares, la sécurité Wi-Fi et l'analyse externe des pare-feu de réseau. La vérification de l'état de préparation WhiteHaX Cyber ​​​​permet aux entreprises de garder une longueur d'avance sur les vulnérabilités potentielles de l'infrastructure de sécurité de l'entreprise."
		 
		
		  
		  
		  
     },
	 
     english: {
          title: "Hello World",
          description: " WhiteHaX Cyber Readiness Verification:</b> Trusted by some of the largest Cyber Insurance Carriers with Tens of thousands of licenses deployed, WhiteHaX is a cloud-hosted, automated, cyber-readiness verification (pen-testing) platform. The WhiteHaX cyber-insurance version provides a no-install, no-impact, quick (under 15-min) verification of a business&apos; cyber-readiness by simulating several threat scenarios against the business&apos; deployed security infrastructure, including network perimeter defenses and endpoint security & controls. Simulated threat scenarios include firewall attacks, user-attacks from internet such as drive-by downloads, email phishing/spoofing/spamming, ransomware, data-exfiltration attempts and others. The 3 types of network scans allow businesses to verify potential dangers of malware/ransomware propagation, wifi security and external scan of network firewalls. WhiteHaX Cyber readiness verification allows business to stay ahead of potential vulnerablities in the business security infrastructure."
		  
			  
     },
	 
	 
	 

	 
	 
	
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
    
}