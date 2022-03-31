pipeline {
		agent any
		tools {
				maven "MAVEN"
				jdk "JDK"
		}
		stages {
				stage('Initialize'){
						steps{
								echo "PATH = ${M2_HOME}/bin:${PATH}"
								echo "M2_HOME = /opt/maven"
						}
				}
				stage('docker-compose'){
						steps{
								sh 'mvn spring-boot:run -Dspring-boot.run.profiles=local'
						}
				}
				stage('Build') {
						steps {
								dir("/home/diallo/workspace/Qualite") {
								sh 'mvn spring-boot:run -Dspring-boot.run.profiles=local'
								}
						}
				}
		}
		post {
			always {
					junit(
				allowEmptyResults: true,
				testResults: '*/test-reports/.xml'
			)
			}
		} 
}
