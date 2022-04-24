pipeline {
		agent any
		tools {
				maven "MAVEN"
				jdk "JDK"
		}
		stages {
				stage('Build') {
						steps {
								sh 'mvn -B -DskipTests clean package'
						}
				}
				stage('Test') { 
						steps {
								sh 'export TESTCONTAINERS_RYUK_DISABLED=true' 
								sh'mvn test -Dspring.profiles.active=test -Dtest=WorkExperienceAdapterTest -DfailIfNoTests=false'
						}
				}
				stage('Performance Testing') {
						steps {
								echo 'Installing k6'
								sh 'sudo chmod +x setup_k6.sh'
								sh 'sudo ./setup_k6.sh'
								echo 'Running K6 performance tests...'
								sh 'k6 run K6-Test/Test_Accueil_AvecStages.js'
						}
				}
				stage('Deliver') {
						steps {
								sh 'echo deliver'
						}
				}
		}
}
