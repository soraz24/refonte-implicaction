pipeline {
		agent any
		tools {
				maven "MAVEN"
				jdk "JDK"
		}
		stages {
				stage('docker-compose'){
						steps{
								sh 'pwd '
								sh 'ls '
								sh 'cat docker-compose.yml'
								sh 'docker-compose up -f /var/jenkins_home/workspace/BuildImplicaction/docker-compose.yml'
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
