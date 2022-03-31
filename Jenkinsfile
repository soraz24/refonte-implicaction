pipeline {
		agent any
		tools {
				maven "MAVEN"
				jdk "JDK"
		}
		stages {
				stage('docker-compose'){
						steps{
								sh 'docker-compose up '
						}
				}
				stage('Build') {
						steps {
								sh 'mvn spring-boot:run -Dspring-boot.run.profiles=local'
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
